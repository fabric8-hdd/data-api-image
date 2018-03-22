set -a
env_script_location=https://raw.githubusercontent.com/fabric8-hypothesis/fabric8-hypothesis-core-image/master/cico_utils/setup_env.sh
APP_NAME=osio-hypothesis-data-api
APP_PORT=$(grep "HYPOTHESIS_DATA_API_PORT" openshift/data-api.env | cut -d'=' -f 2)
BUILD_MACHINE_OS=centos
os_prep_script_location=https://raw.githubusercontent.com/fabric8-hypothesis/fabric8-hypothesis-core-image/master/cico_utils/prerequisites/${BUILD_MACHINE_OS}.sh
set +a
