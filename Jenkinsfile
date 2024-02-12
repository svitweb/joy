pipeline {
    agent any

    triggers {
        gitlab (
            triggerOnPush: true,
            setBuildDescription: true
        )
    }

    options {
        disableConcurrentBuilds()
        buildDiscarder(logRotator(artifactDaysToKeepStr: "", artifactNumToKeepStr: "", daysToKeepStr: "14", numToKeepStr: ""))
    }

    environment {
        CI = "true"  // needed for test running in non-watch mode
    }

    stages {
        stage("Prepare") {
            steps {
                sh("git reset --hard")
                sh("git clean -ffdx")
            }
        }

        stage("Build") {
            steps {
                nodejs(nodeJSInstallationName: "nodejs") {
                    sh("npm install")
                }
            }
        }

        stage("Test") {
            steps {
                nodejs(nodeJSInstallationName: "nodejs") {
                    sh("npm run test:ci")
                }
            }
        }
    }

    post {
        always {
            junit "junit.xml"
        }
    }
}
