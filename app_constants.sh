env_script_location=https://raw.githubusercontent.com/fabric8-hdd/hypothesis-core-image/master/cico_utils/setup_env.sh
APP_NAME=data-api
APP_PORT=$(grep "HDD_DATA_API_PORT" openshift/data-api.env | cut -d'=' -f 2)