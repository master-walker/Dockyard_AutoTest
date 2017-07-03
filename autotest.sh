#/bin/sh
#get current date and time
curDate="`date +%Y-%m-%d`"
curTime="`date +%H-%M`"

projectPath="/Users/bindo/MyDisk/AutoTest/dockyard"
#report file save path
reportDir="/test-report/dockyard/$curDate"

# if reportDir don't exist,then create
if (! -d $reportDir)
 then
 mkdir -p .$reportDir
fi

echo "start dockyard test"

reportFileName=$projectPath$reportDir/dockyard-test-report-$curTime.html

wsReportName=$projectPath$reportDir/dockyard-ws-test-report-${curTime}.html

echo $reportFileName > ./test-report/reportName.txt
#echo $wsReportName > ./test-report/reportName.txt

#ouput good-mocha-html-reporter test report ./
for i in {1..10}
do
    mocha -R good-mocha-html-reporter test-dockyard.js -p $reportFileName


    #ouput mochawesome test report
    #add test report path and report file name options

    #mocha --reporter mochawesome test-dockyard.js --reporter-options reportDir=.$reportDir,reportFilename="dockyard-ws-test-report-${curTime}.html"

    #send report mail
    node ./common/send-report-mail.js
done









#echo "second test"
#mocha -R good-mocha-html-reporter ./test-dockyard -p ./test-report/test-report.htmls
#mocha --reporter mochawesome test-dockyard.js