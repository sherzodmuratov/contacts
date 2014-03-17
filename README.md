contacts
========

Web application to create, view and edit personal and business contacts.


### Development environment
#### DB
Install 
* MySQL Community Server - http://dev.mysql.com/downloads/installer/
* MySQL Workbench - http://dev.mysql.com/downloads/tools/workbench/

#### Maven - automation tool
Download http://maven.apache.org/download.cgi -- and follow instructions in README file

#### IDE and project layout
Use your favorite IDE like Eclipse, Intellij.
Import as Maven project.

#### Aplication server
Use default Jetty plugin with Maven

### Production environment
We use AWS EC2 to deploy our app at http://54.186.150.153:8080
Tomcat and MySQL are installed. 
Deploy the app by copying war package to application server.
Create and maintain DB using sql patches.

#### Access to EC2 linux machine
* Follow http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html
* Use key file shared via GDocs

#### GUI access to DB
* Use Workbench - http://domino.symetrikdesign.com/2010/10/07/how-to-create-a-mysql-workbench-connection-to-amazon-ec2-server/
* Settings:
SSH Hostname : ec2-54-186-150-153.us-west-2.compute.amazonaws.com
SSH Username : ec2-user
SSH Key File : Use maxfiy_kalit.pem shared via GDocs



