pipeline {
    agent any
    
    stages() {
        
        stage('Checkout') {
                steps {
                    checkout scmGit(branches: [[name: 'main']], 
                                    userRemoteConfigs: [[url: 'https://github.com/Lajancia/oblivion-next.git']])
                }
            }

        stage('Docker Image Build') {
            steps {
                echo 'Docker building..'
                script {
                    sh 'docker build --no-cache -t nextjs-oblivion .'
                }
            }
        
        }

         stage('Run Docker Container') {
            steps {
                sh 'docker stop nextjs-oblivion || true'
                sh 'docker rm nextjs-oblivion || true'
                sh 'docker run -d -p 3333:3000 --name nextjs-oblivion nextjs-oblivion'
            }
        }
   		// stage...
   	}
}