# General optimizations
-dontwarn android.webkit.**
-dontwarn androidx.compose.**

# Keep classes in the main package to ensure stability in this Hybrid App
-keep class com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak.** {
    <fields>;
    <methods>;
}

# Firebase SDKs provide their own consumer keep rules.
# Manually adding broad rules is redundant and can lead to larger binaries.
-dontwarn com.google.firebase.**

# WebView JS Interface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Coroutines
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-keepnames class kotlinx.coroutines.android.AndroidExceptionPreHandler {}
-keepnames class kotlinx.coroutines.android.AndroidDispatcherFactory {}
