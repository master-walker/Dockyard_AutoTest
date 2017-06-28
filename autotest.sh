#/bin/sh
#git current date and time
curDate="`date +%Y-%m-%d`"
curTime="`date +%H-%M`"

projectPath="/Users/bindo/MyDisk/AutoTest/dockyard-autotest"
#report file save path
reportDir="/test-report/dockyard/$curDate"

# if reportDir don't exist,then create
if (! -d $reportDir)
 then
 mkdir -p .$reportDir
fi

echo "start dockyard test"
#
reportFileName=$projectPath$reportDir/dockyard-test-report-$curTime.html
wesomeReportName=$projectPath$reportDir/dockyard-mochawesome-test-report-${curTime}.html

echo $reportFileName > ./test-report/reportName.txt
#echo $wesomeReportName > ./test-report/reportName.txt

#ouput good-mocha-html-reporter test report
mocha -R good-mocha-html-reporter ./test-dockyard -p $reportFileName

#ouput mochawesome test report
#add test report path and report file name options
#mocha --reporter mochawesome test-dockyard.js --reporter-options reportDir=.$reportDir,reportFilename="dockyard-mochawesome-test-report-${curTime}.html"

#send report mail
node ./common/send-report-mail.js









#echo "second test"
#mocha -R good-mocha-html-reporter ./test-dockyard -p ./test-report/test-report.htmls
#mocha --reporter mochawesome test-dockyard.js