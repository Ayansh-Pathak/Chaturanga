package com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak

import android.annotation.SuppressLint
import android.os.Bundle
import android.util.Log
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.viewinterop.AndroidView
import com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.ui.theme.ChaturangaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ChaturangaTheme {
                // Using the exact background color from your dark theme (#0e1015)
                val backgroundColor = androidx.compose.ui.graphics.Color(0xFF0E1015)
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = backgroundColor,
                ) {
                    ChaturangaWebView("file:///android_asset/index.html", backgroundColor)
                }
            }
        }
    }
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun ChaturangaWebView(url: String, backgroundColor: androidx.compose.ui.graphics.Color) {
    AndroidView(
        factory = { context ->
            WebView(context).apply {
                // Set background color immediately to avoid white flash
                setBackgroundColor(backgroundColor.toArgb())
                
                @Suppress("DEPRECATION")
                settings.apply {
                    javaScriptEnabled = true
                    domStorageEnabled = true
                    allowFileAccess = true
                    allowContentAccess = true
                    
                    // Security settings for local file access
                    allowFileAccessFromFileURLs = true
                    allowUniversalAccessFromFileURLs = true
                    
                    cacheMode = android.webkit.WebSettings.LOAD_DEFAULT
                    setSupportZoom(false)
                    builtInZoomControls = false
                    displayZoomControls = false
                    
                    // Further optimizations for WebView performance
                    useWideViewPort = true
                    loadWithOverviewMode = true
                    textZoom = 100
                    
                    // Some React apps might need these
                    databaseEnabled = true
                    mediaPlaybackRequiresUserGesture = false
                }
                
                // Speed up loading with hardware acceleration
                setLayerType(android.view.View.LAYER_TYPE_HARDWARE, null)
                
                webChromeClient = object : WebChromeClient() {
                    override fun onConsoleMessage(consoleMessage: android.webkit.ConsoleMessage?): Boolean {
                        Log.d("ChaturangaWebView", consoleMessage?.message() ?: "")
                        return true
                    }
                }
                
                webViewClient = object : WebViewClient() {
                    override fun shouldOverrideUrlLoading(
                        view: WebView?,
                        request: WebResourceRequest?,
                    ): Boolean {
                        return false // Load inside WebView
                    }

                    override fun onReceivedError(
                        view: WebView?,
                        request: WebResourceRequest?,
                        error: WebResourceError?,
                    ) {
                        super.onReceivedError(view, request, error)
                        Log.e("ChaturangaWebView", "Error loading: ${error?.description}")
                        if (request?.isForMainFrame == true) {
                            Toast.makeText(context, "Error: ${error?.description}", Toast.LENGTH_LONG).show()
                        }
                    }
                }
                
                loadUrl(url)
            }
        },
        modifier = Modifier.fillMaxSize(),
    )
}
