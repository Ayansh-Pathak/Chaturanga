# General optimizations
-dontwarn android.webkit.**
-dontwarn androidx.compose.**

# Keep all classes in the main package to ensure stability in this Hybrid App
-keep class com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.** { *; }

# Firebase Crashlytics
-keepattributes SourceFile,LineNumberTable
-keep public class * extends java.lang.Exception

# Firebase Common
-keep class com.google.firebase.** { *; }
-dontwarn com.google.firebase.**

# Gemini / Google AI SDK (if used)
-keep class com.google.ai.client.generativeai.** { *; }
-dontwarn com.google.ai.client.generativeai.**

# WebView JS Interface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Preserve WebViewClient methods used by the system
-keepclassmembers class * extends android.webkit.WebViewClient {
    public void *(android.webkit.WebView, java.lang.String);
    public void *(android.webkit.WebView, java.lang.String, android.graphics.Bitmap);
    public void *(android.webkit.WebView, android.webkit.WebResourceRequest, android.webkit.WebResourceError);
}

# Coroutines
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-keepnames class kotlinx.coroutines.android.AndroidExceptionPreHandler {}
-keepnames class kotlinx.coroutines.android.AndroidDispatcherFactory {}

-keepclassmembernames class kotlinx.coroutines.android.HandlerContext$ScheduledRunnable {
    *** run();
}

# M3 / Compose
-keep class androidx.compose.material3.** { *; }
-dontwarn androidx.compose.material3.**
