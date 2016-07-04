/*
Title: NAT - iptables -nat
Description: <p>Everytime I have to configure NAT I end up Googling for it. Here is the set of commands that must be done in order to do NAT.</p>
Date: 2011/11/20
*/

Everytime I have to configure NAT I end up Googling for it. Here is the set of commands that must be done in order to do NAT.

	# delete old configuration, if any
	#Flush all the rules in filter and nat tables
   	iptables --flush           		
   	iptables --table nat --flush
	
	# delete all chains that are not in default filter and nat table, if any
   	iptables --delete-chain     
   	iptables --table nat --delete-chain

	# Set up IP FORWARDing and Masquerading (NAT)
   	iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE
   	iptables --append FORWARD --in-interface eth1 -j ACCEPT

	#enable IP forwarding
   	echo 1 > /proc/sys/net/ipv4/ip_forward


I got this code from this page [http://users.telenet.be/mydotcom/howto/lanconnect/router/linux.htm](http://users.telenet.be/mydotcom/howto/lanconnect/router/linux.htm).
