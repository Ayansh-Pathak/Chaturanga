plugins {
    id("com.android.application")
    id("com.google.gms.google-services")
    id("com.google.firebase.crashlytics")
    id("com.google.firebase.firebase-perf")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = "com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak"
    compileSdk = 37

    defaultConfig {
        applicationId = "com.ayanshcorp.chaturangathegrandchessarenabyayanshpathak"
        minSdk = 24
        targetSdk = 37
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro",
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildFeatures {
        compose = true
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.19.0")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.11.0")
    implementation("androidx.activity:activity-compose:1.13.0")
    implementation(platform("androidx.compose:compose-bom:2026.08.00"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.webkit:webkit:1.17.0")
    implementation(platform("com.google.firebase:firebase-bom:34.18.0"))
    implementation("com.google.firebase:firebase-analytics")
    implementation("com.google.firebase:firebase-firestore")
    implementation("com.google.firebase:firebase-auth")
    implementation("com.google.firebase:firebase-crashlytics")
    implementation("com.google.firebase:firebase-perf")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.3.0")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.7.0")
    androidTestImplementation("androidx.compose.ui:ui-test-junit4:1.12.0")
    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest:1.12.0")
}

tasks.register<Copy>("copyWebDistToAssets") {
    description = "Copies the web build output to Android assets."
    val distDir = file("${project.rootDir}/dist")
    val assetsDir = file("${project.projectDir}/src/main/assets")
    
    from(distDir)
    into(assetsDir)
    
    doFirst {
        if (!distDir.exists() || (distDir.listFiles()?.isEmpty() == true)) {
            logger.warn("WARNING: 'dist' folder is missing or empty! Build will only contain the placeholder loading page.")
        } else {
            logger.lifecycle("Cleaning old assets and copying new web assets from ${distDir.absolutePath} to ${assetsDir.absolutePath}")
            delete(assetsDir)
            assetsDir.mkdirs()
        }
    }
    
    onlyIf {
        distDir.exists()
    }
}

tasks.named("preBuild") {
    dependsOn("copyWebDistToAssets")
}
