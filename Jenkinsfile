pipeline {
    agent any

    stages {
        stage('cambiar de directorio') {
            steps {
                sh 'cd ~'
                sh 'cd /app'
                sh 'pwd'
                sh 'ls'
            }
        }
        stage('Pull') {
            steps {
                sh 'git pull origin main'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Desplegar APP') {
            steps {
                sh 'sudo docker-compose build'
                sh 'sudo docker-compose up -d'
            }
        }
    }
}
