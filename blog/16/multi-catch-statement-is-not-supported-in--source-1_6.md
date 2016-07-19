/*
Title: multi-catch statement is not supported in -source 1.6
Description: This post shows how to solve the problem with java version support while using mvn
Date: 2016/03/30
Tags: java,maven
*/

# multi-catch statement is not supported in -source 1.6

On a project I'm working, I tried to use multi-catch statement, something like this:

```java
try {
    something()
} catch (AException | BException | CException | DException e) {
    handleMyException(e);
}
```

When building with maven `mvn clean install`, it gave the the following error:

```
[ERROR] COMPILATION ERROR : 
[INFO] -------------------------------------------------------------
[ERROR] /home/dmelo/proj2/File.java:[10,38] multi-catch statement is not supported in -source 1.6
  (use -source 7 or higher to enable multi-catch statement)
[INFO] 1 error
[INFO] -------------------------------------------------------------
```

After seeing this, my question was: how to specify the version compatibility
version to use? The answer is ADD a new plugin on the pom.xml like this:

```xml
<?xml version="1.0"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
...
    <build>
        <plugins>
            <!--
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.5.1</version>
                <configuration>
                    <source>1.7</source>
                    <target>1.7</target>
                </configuration>
            </plugin>
            ...
        </plugins>
        ...
    </build>
    ...
</project>
```

After inserting that new section, `mvn clean install` went smoothly :).
