#/bin/sh
echo "start dockyard test"
mocha -R good-mocha-html-reporter ./test-dockyard -p ./test-report/testreport.htmls
#echo "second test"
#mocha -R good-mocha-html-reporter ./test-dockyard -p ./test-report/testreport.htmls
