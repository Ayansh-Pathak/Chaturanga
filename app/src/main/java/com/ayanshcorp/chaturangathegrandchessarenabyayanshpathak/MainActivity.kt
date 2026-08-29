package com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak

import android.annotation.SuppressLint
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import com.google.firebase.analytics.FirebaseAnalytics
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.viewinterop.AndroidView
import androidx.webkit.WebResourceErrorCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewAssetLoader.AssetsPathHandler
import androidx.webkit.WebViewClientCompat
import androidx.webkit.WebViewFeature
import com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.ui.theme.ChaturangaTheme

class MainActivity : ComponentActivity() {
    private lateinit var firebaseAnalytics: FirebaseAnalytics

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        try {
            // Initialize Firebase Analytics and log app open
            firebaseAnalytics = FirebaseAnalytics.getInstance(this)
            firebaseAnalytics.logEvent(FirebaseAnalytics.Event.APP_OPEN, null)
        } catch (e: Exception) {
            Log.e("MainActivity", "Firebase Analytics init failed: ${e.message}")
        }

        setContent {
            ChaturangaTheme {
                val backgroundColor = Color(0xFF0E1015)
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = backgroundColor,
                ) {
                    ChaturangaWebView(
                        url = "https://appassets.androidplatform.net/assets/index.html",
                        backgroundColor = backgroundColor,
                    )
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun ChaturangaWebView(url: String, backgroundColor: Color) {
    AndroidView(
        factory = { context ->
            val assetLoader = WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", AssetsPathHandler(context))
                .build()

            WebView(context).apply {
                layoutParams = ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT,
                    ViewGroup.LayoutParams.MATCH_PARENT,
                )
                
                setBackgroundColor(backgroundColor.toArgb())
                
                @Suppress("DEPRECATION")
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    allowFileAccess = true
                    allowContentAccess = true
                    
                    cacheMode = WebSettings.LOAD_DEFAULT
                    setSupportZoom(false)
                    
                    useWideViewPort = true
                    loadWithOverviewMode = true
                    
                    databaseEnabled = true
                    mediaPlaybackRequiresUserGesture = false
                }
                
                setLayerType(View.LAYER_TYPE_HARDWARE, null)
                
                webChromeClient = object : WebChromeClient() {
                    override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                        Log.d("ChaturangaWebView", "[JS] ${consoleMessage?.message()} -- From line ${consoleMessage?.lineNumber()} of ${consoleMessage?.sourceId()}")
                        return true
                    }

                    override fun onProgressChanged(view: WebView?, newProgress: Int) {
                        super.onProgressChanged(view, newProgress)
                        Log.d("ChaturangaWebView", "Loading progress: $newProgress%")
                    }
                }
                
                webViewClient = object : WebViewClientCompat() {
                    override fun shouldInterceptRequest(
                        view: WebView?,
                        request: WebResourceRequest,
                    ): WebResourceResponse? {
                        return assetLoader.shouldInterceptRequest(request.url)
                    }

                    override fun onReceivedError(
                        view: WebView,
                        request: WebResourceRequest,
                        error: WebResourceErrorCompat,
                    ) {
                        if (WebViewFeature.isFeatureSupported(WebViewFeature.WEB_RESOURCE_ERROR_GET_DESCRIPTION)) {
                            Log.e("ChaturangaWebView", "Error loading: ${error.description} for URL: ${request.url}")
                        } else {
                            Log.e("ChaturangaWebView", "Error loading URL: ${request.url}")
                        }
                    }
                    
                    override fun onPageFinished(view: WebView?, url: String?) {
                        super.onPageFinished(view, url)
                        Log.d("ChaturangaWebView", "Finished loading: $url")
                    }

                    override fun onRenderProcessGone(
                        view: WebView?,
                        detail: RenderProcessGoneDetail?,
                    ): Boolean {
                        val crashed = (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) && (detail?.didCrash() == true)
                        Log.e("ChaturangaWebView", "Render process gone. Crashed: $crashed")
                        return true
                    }
                }
                
                loadUrl(url)
            }
        },
        modifier = Modifier.fillMaxSize(),
    ) { webView ->
        webView.visibility = View.VISIBLE
    }
}
