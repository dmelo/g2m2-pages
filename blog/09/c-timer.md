/*
Title: C++ - Timer
Description: Do you know there times when you just want to measure the time that some peace of code takes to run? And then you have to think about gettimeofday, timezone, timeval and so on... I just wrote a class that do all the work. You call start() when you want to start the timer and end(), to stop it. You can take the diff, between start and end, as an struct timeval or just transform the result to string and throw it to cout... The class is timer. Here is the header...
Date: 2010/02/16
*/

Do you know there times when you just want to measure the time that some peace of code takes to run? And then you have to think about gettimeofday, timezone, timeval and so on...

I just wrote a class that do all the work. You call start() when you want to start the timer and end(), to stop it. You can take the diff, between start and end, as an `struct timeval` or just transform the result to string and throw it to cout...

The class is timer. Here is the header, [timer.h](/files/timer.h):


    #ifndef TIMER_H
    #define TIMER_H
    #include<sys/time.h>
    #include<iostream>
    #include<string>

    using namespace std;

    class timer {
        private:
            struct timezone tz;
            bool started;
            bool ended;
            struct timeval st;
            struct timeval en;
        public:
            timer();
            void restart();
            bool start();
            bool end();
            struct timeval getDiff();
            string toString();
    };

    #endif // TIMER_H


Now the [timer.cpp](/files/timer.cpp)

    #include"timer.h"

    timer::timer() {
        started = ended = false;
    }

    void timer::restart() {
        timer();
    }

    bool timer::start() {
        gettimeofday(&st, &tz);
         if(ended)
            return false;
        started = true;

        return true;
    }

    bool timer::end() {
        gettimeofday(&en, &tz);

        if(!started)
            return false;
        ended = true;

        return true;
    }

    struct timeval timer::getDiff() {
        struct timeval tv;

        tv.tv_sec = tv.tv_usec = 0;
        if(!started || ! ended)
            return tv;
        tv.tv_sec = en.tv_sec - st.tv_sec;
        tv.tv_usec = en.tv_usec - st.tv_usec;
        if(tv.tv_usec < 0) {
            tv.tv_sec--;
            tv.tv_usec = 1000 - tv.tv_usec;
        }

        return tv;
    }

    string timer::toString() {
        char ret[60];
        struct timeval tv = getDiff();
        sprintf(ret, "timer - sec: %d. msec: %d. usec: %d.", (int) tv.tv_sec,
                (int) tv.tv_usec / 1000,
                (int) (tv.tv_usec - (1000 * (tv.tv_usec / 1000))));

        return string(ret);
    }



At the last... an example of how to use it. The [main.cpp](/files/main.cpp)

    #include"timer.h"
    #include<iostream>
    
    using namespace std;

    int main() {
        timer t;
        t.start();
        sleep(1);
        t.end();
        cout << t.toString() << endl;

        return 0;
    }

Please, leave comments.
