
#!/bin/bash

set -x

. app_constants.sh

setup() {
    curl -O ${env_script_location}
    . ./setup_env.sh; setup_env

    . cico_utils/setup_utils.sh
    . app_version.sh
    .constants.sh

    install_docker   
    load_jenkins_vars  
    docker_login

    BUILD_ARGS=$( format_build_args APP_PORT=${APP_PORT} APP_NAME=${APP_NAME} )
    build_push_images -repo ${APP_NAME} -build-args "${BUILD_ARGS}" -app-version ${APP_VERSION} -test "yes" -docker-file Dockerfile.app -app-version ${APP_VERSION} -docker-file-test "Dockerfile.tests" -port ${APP_PORT}
}

setup
