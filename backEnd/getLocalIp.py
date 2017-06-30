from pymongo import MongoClient
import requests


client = MongoClient('localhost', 27017)
db = client.network_data
collection = db.networkStuff
comparator = '137'
list = []
list2 = []
list3 = []
currentHost = db.hostList.find()
def compareData():
    print('compareData')
    for ob2 in currentHost:
        if ob2['IpAddress'] not in list:
            db.hostList.delete_one({'IpAddress': ob2['IpAddress'],'MacAddress': ob2['MacAddress'],'Vendor': ob2['Vendor'],'_id': ob2['_id']})
        elif ob2['IpAddress'] in list:
            list2.pop(list.index(ob2['IpAddress']))
            list.pop(list.index(ob2['IpAddress']))
            
        

def getData():
    print('getData')
    results = collection.find().sort([('_id', -1)]).limit(10000) 
    x = 0
    for obj in results:
        print(obj['_id'])
        if obj['SourceIP'][:3] == comparator:
            if obj['SourceIP'] not in list:
               
                list.insert(x,obj['SourceIP'])
                list2.insert(x,obj['SourceMac'])
            x = x+1
def sendData():
    print('sendData')
    for string in list:
        x = list.index(string)
        y = list2[x]
        z = 'http://api.macvendors.com/'+y

        zz = requests.request('GET', z)
        post = {
            "IpAddress" : string,
            "MacAddress": y,
            "Vendor": zz.text
        }
        db.hostList.insert(post)
    print(len(list))
    
def getSize():
    monsize = db.hostList.find()
    x = 0
    for obj in monsize:
        x = x + 1
    post2 = {
        "number_of_hosts": x
    }
    db.numDevices.insert(post2)
    print(x)


getData()
compareData()
sendData()
getSize()
   




