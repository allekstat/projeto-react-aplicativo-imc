# script de configuração rápida em repositórios recém clonados
read -p "NOME :: "
git config --local user.name $REPLY
read -p "EMAIL :: "
git config --local user.email $REPLY
read -p "TOKEN :: "
git config --local remote.origin.url https://$REPLY:$REPLY@github.com/allekstat/projeto-react-aplicativo-imc