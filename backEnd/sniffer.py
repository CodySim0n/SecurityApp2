import socket
from general import *
from network.ethernet import Ethernet 
from network.ipv4 import IPv4 
from network.icmp import ICMP 
from network.tcp import TCP 
from network.udp import UDP 
from network.pcap import Pcap 
from network.http import HTTP 
from pymongo import MongoClient 

def main():
	pcap = Pcap('capture.pcap')
	conn = socket.socket(socket.AF_PACKET,socket.SOCK_RAW, socket.ntohs(3))
	client = MongoClient('localhost', 27017)
	db = client.network_data
	db.networkStuff.drop()
	

	while True:
		raw_data, addr = conn.recvfrom(65535)
		pcap.write(raw_data)
		eth = Ethernet(raw_data)

		comp = '00:00:00:00:00:00'
		a = format(eth.dest_mac)
		b = format(eth.src_mac)
		c = format(eth.proto)
		if comp != a and comp != b:
			#IPv4 data
			if eth.proto == 8:
				ipv4 = IPv4(eth.data)
				d = "IPV4"
				e = format(ipv4.version)
				f = format(ipv4.header_length)
				g = format(ipv4.ttl)
				h = format(ipv4.proto)
				i = format(ipv4.src)
				j = format(ipv4.target)
				#ICMP
				# if ipv4.proto == 1:
				# 	icmp = ICMP(ipv4.data)
				# 	k = "ICMP PACKET"
				# 	l = format(icmp.type)
				# 	m = format(icmp.code)
				# 	n = format(icmp.checksum)
				# 	post = {
				# 	"DestinationMac": a,
				# 	"SourceMac" : b,
				# 	"EthernetProtocol": c,
				# 	"Type" : d,
				# 	"Version" : e,
				# 	"HeaderLength" : f,
				# 	"TTL" : g,
				# 	"IPV4Protocol": h,
				# 	"SourceIP" : i,
				# 	"DestinationIP" : j,
				# 	"PacketType" : k,
				# 	"ICMPtype" : l,
				# 	"IcmpCode" : m,
				# 	"Checksum" : n
				# 	}
				# 	db.networkStuff.insert(post)
				#TCP
				if ipv4.proto == 6:
					tcp = TCP(ipv4.data)
					k = "TCP Packet"
					l = format(tcp.src_port)
					m = format(tcp.dest_port)
					n = format(tcp.sequence)
					o = format(tcp.acknowledgment)
					#Only sends tcp to if data length > 0
					if len(tcp.data) > 0:
						#HTTP
						if tcp.src_port == 80 or tcp.dest_port == 80:
							p = "HTTP DATA"
							try:
								http = HTTP(tcp.data)
								p = str(http.data)
								post = {
								"DestinationMac": a,
								"SourceMac": b,
								"EthernetProtocol": c,
								"Type": d,
								"Version" : e,
								"HeaderLength" : f,
								"TTL" : g,
								"IPV4Protocol": h,
								"SourceIP" : i,
								"DestinationIP" : j,
								"PacketType" : k,
								"TCPsourceport": l,
								"TCPdestinationport" : m,
								"TCPsequence" : n,
								"TCPacknowledgment" : o,
								"Data" : p
								}
								db.networkStuff.insert(post)


							except:
								p = tcp.data
								post = {
								"DestinationMac": a,
								"SourceMac" : b,
								"EthernetProtocol": c,
								"Type" : d,
								"Version" : e,
								"HeaderLength" : f,
								"TTL" : g,
								"IPV4Protocol": h,
								"SourceIP" : i,
								"DestinationIP" : j,
								"PacketType" : k,
								"TCPsourceport": l,
								"TCPdestinationport" : m,
								"TCPsequence" : n,
								"TCPacknowledgment" : o,
								"Data" : p
								}
								db.networkStuff.insert(post)
				#UDP
				elif ipv4.proto == 17:
					udp = UDP(ipv4.data)
					k = "UDP packet"
					l = format(udp.src_port)
					m = format(udp.dest_port)
					n = format(udp.size)
					post = {
					"DestinationMac": a,
					"SourceMac" : b,
					"EthernetProtocol": c,
					"Type" : d,
					"Version" : e,
					"HeaderLength" : f,
					"TTL" : g,
					"IPV4Protocol": h,
					"SourceIP" : i,
					"DestinationIP" : j,
					"PacketType" : k,
					"UDPsourceport" : l,
					"UDPdestinationport" : m,
					"UDPsize" : n,
					"Data": " "
					}
					db.networkStuff.insert(post)
main()