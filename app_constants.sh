env_script_location=https://raw.githubusercontent.com/fabric8-hdd/fabric8-hypothesis-core-image/master/cico_utils/setup_env.sh
APP_NAME=fabric8-hypothesis-data-api
APP_PORT=$(grep "HDD_DATA_API_PORT" openshift/data-api.env | cut -d'=' -f 2)