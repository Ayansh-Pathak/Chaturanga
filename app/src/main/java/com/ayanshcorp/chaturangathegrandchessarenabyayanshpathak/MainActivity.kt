package com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.viewinterop.AndroidView
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewAssetLoader.AssetsPathHandler
import com.google.firebase.FirebaseApp
import com.google.firebase.analytics.FirebaseAnalytics
import com.google.firebase.crashlytics.FirebaseCrashlytics
import com.google.firebase.perf.FirebasePerformance
import com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.ui.theme.ChaturangaTheme

class MainActivity : ComponentActivity() {
    private lateinit var firebaseAnalytics: FirebaseAnalytics

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Safety: Offload all non-UI initialization to background
        Thread {
            try {
                // Initialize Firebase with a safe check
                if (FirebaseApp.getApps(this).isEmpty()) {
                    FirebaseApp.initializeApp(this)
                }
                firebaseAnalytics = FirebaseAnalytics.getInstance(this)
                firebaseAnalytics.logEvent(FirebaseAnalytics.Event.APP_OPEN, null)
                
                // Defer heavy metrics to after initial render
                Thread.sleep(2000)
                FirebaseCrashlytics.getInstance().isCrashlyticsCollectionEnabled = true
                FirebasePerformance.getInstance().isPerformanceCollectionEnabled = true
            } catch (e: Exception) {
                Log.e("MainActivity", "Deferred init failed: ${e.message}")
            }
        }.start()

        setContent {
            ChaturangaTheme {
                val backgroundColor = Color(0xFF0E1015)
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = backgroundColor,
                ) {
                    ChaturangaWebView(
                        url = getString(R.string.index_url),
                    )
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled", "WebViewClientOnRenderProcessGone")
@Composable
fun ChaturangaWebView(url: String) {
    AndroidView(
        factory = { context ->
            val assetLoader = WebViewAssetLoader.Builder()
                .addPathHandler("/", AssetsPathHandler(context))
                .build()

            WebView(context).apply {
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                )
                
                // Use a transparent background for the WebView itself
                // so the Compose Surface color shows through immediately
                setBackgroundColor(0) 
                
                @Suppress("DEPRECATION")
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    
                    setSupportZoom(false)
                    
                    useWideViewPort = true
                    loadWithOverviewMode = true
                    
                    databaseEnabled = true
                    mediaPlaybackRequiresUserGesture = false
                    
                    // Enhancement for modern web features
                    mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                }
                
                setLayerType(View.LAYER_TYPE_SOFTWARE, null)
                
                webChromeClient = object : WebChromeClient() {}
                
                webViewClient = @SuppressLint("WebViewClientOnRenderProcessGone") object : WebViewClient() {
                    override fun onRenderProcessGone(
                        view: WebView,
                        detail: RenderProcessGoneDetail,
                    ): Boolean {
                        // Crucial safety check: if the web engine crashes, reload it automatically
                        // to prevent the "app keeps stopping" popup.
                        Log.e("ChaturangaWebView", "Render process lost. Reloading...")
                        view.loadUrl(url)
                        return true // This tells Android we handled the crash ourselves
                    }

                    override fun shouldInterceptRequest(
                        view: WebView,
                        request: WebResourceRequest,
                    ): WebResourceResponse? {
                        return assetLoader.shouldInterceptRequest(request.url)
                    }

                    override fun onReceivedError(
                        view: WebView,
                        request: WebResourceRequest,
                        error: WebResourceError,
                    ) {
                        val description = error.description.toString()
                        Log.e("ChaturangaWebView", "Error loading: $description for URL: ${request.url}")
                        if (request.url.toString().contains("index.html")) {
                             val prodUrl = view.context.getString(R.string.prod_url)
                             view.post { view.loadUrl(prodUrl) }
                        }
                    }
                }
                
                loadUrl(url)
            }
        },
        modifier = Modifier.fillMaxSize(),
    ) { _ -> }
}
