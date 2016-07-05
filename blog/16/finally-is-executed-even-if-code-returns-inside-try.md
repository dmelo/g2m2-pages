/*
Title: Finally is executed even if code returns inside try
Description: The finally statement is executed even if the code calls return inside the try statement.
Date: 2016/02/18
Tags: java
*/

I came across a piece of code where there was a `return` statement inside the
`try` and the `finally` with some code as well. I don't have much experience
with Java and, until today, `return` meant end of execution for me. Then,
convinced that there was something fishy with that piece of code, I decided to
put it to a test.

I wrote the following code inside `A.java`:

    public class A {
        public int t() {
            try {
                System.out.println("try");
                return 2;
            } catch (Exception e) {
            } finally {
                System.out.println("finally");
            }
            return 1;
        }

        static public void main(String []args) {
            A a = new A();
            System.out.println("t: " + a.t());
        }
    }


Then I compiled and ran it. Here is the result:

    dmelo@merov2:~/proj2/java$ java A
    try
    finally
    t: 2

See that it is printing the "finally" line? Today I've learned it called the
finally block even if you return the method inside the `try`. My next tought
was: in what situation Java doesn't run the `finally` block? I came across
a [StackOverflow Question](http://stackoverflow.com/questions/65035/does-finally-always-execute-in-java?page=1&tab=votes#tab-top)
that solved the question. As stated by [jodonnell](http://stackoverflow.com/users/4223/jodonnell),
Java will not run the `finally` block if one of the following happens:

1. `System.exit()` is called;
2. another thread interrupts current one (via the interrupt method);
3. JVM crashes first.
