package com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.viewinterop.AndroidView
import com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.ui.theme.ChaturangaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ChaturangaTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background,
                ) {
                    ChaturangaWebView("file:///android_asset/index.html")
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun ChaturangaWebView(url: String) {
    AndroidView(
        factory = { context ->
            WebView(context).apply {
                settings.javaScriptEnabled = true
                settings.domStorageEnabled = true
                settings.allowFileAccess = true
                settings.allowContentAccess = true
                settings.cacheMode = android.webkit.WebSettings.LOAD_DEFAULT
                settings.setSupportZoom(false)
                settings.builtInZoomControls = false
                settings.displayZoomControls = false
                
                // Speed up loading
                setLayerType(android.view.View.LAYER_TYPE_HARDWARE, null)
                
                webViewClient = object : WebViewClient() {
                    override fun shouldOverrideUrlLoading(
                        view: WebView?,
                        request: WebResourceRequest?,
                    ): Boolean {
                        return false // Load inside WebView
                    }
                }
                
                loadUrl(url)
            }
        },
        modifier = Modifier.fillMaxSize(),
    )
}
