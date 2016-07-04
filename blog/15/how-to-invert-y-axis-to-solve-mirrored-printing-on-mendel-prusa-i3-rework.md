/*
Title: How to invert y axis to solve mirrored printing on mendel prusa i3 rework 
Descprition: How to invert an axis to solve mirrored printing behaiour.
Date: 2015/11/04
Tags: 3dprinter
*/


When I was printing the first pieces on my I3 rework I've notice that it was
comming mirrored on the Y axis. I'm using the
[Marlin_Prusai3_reprap_pt](http://reprap.org/wiki/Prusa_i3_Rework_Firmware)
firmware. On the instructions, the only file that should be edited is the
*Configuration.h*.

I edited everything there was to change on the *Configuration.h* file, flushed
to the Arduino Mega 2560 and started printing (with the pieces mirrored).

After googling it, I found this post [http://www.thefrankes.com/wp/?p=2651](http://www.thefrankes.com/wp/?p=2651), which was very useful. In essence, it says to change *INVERT_Y_DIR*
and *Y_HOME_DIR* in *Configuration.h* but ALSO to switch the pins *Y_MAX_PIN*
and  *Y_MIN_PIN* on the file *pins.h*.

Mind the fact that *#define Y_MIN_PIN* appears many times on *pins.h*. You have
to fine the right lines, to the change, based on your *motherboard*.

After changing both the *Configuration.h* and *pins.h* and uploading the new
firmware to the mega, the Y axis was inverted and the new printings was no
longer inverted.

Here is my git diff of the changes I've made:

    diff --git a/Configuration.h b/Configuration.h
    index 236171c..62bb8e5 100644
    --- a/Configuration.h
    +++ b/Configuration.h
    @@ -314,7 +314,7 @@ const bool Z_MAX_ENDSTOP_INVERTING = false; // set to true to invert the logic o
     #define DISABLE_E false // For all extruders
     
     #define INVERT_X_DIR false    // for Mendel set to false, for Orca set to true
    -#define INVERT_Y_DIR true    // for Mendel set to true, for Orca set to false
    +#define INVERT_Y_DIR false    // for Mendel set to true, for Orca set to false
     #define INVERT_Z_DIR false     // for Mendel set to false, for Orca set to true
     #define INVERT_E0_DIR true   // for direct drive extruder v9 set to true, for geared extruder set to false
     #define INVERT_E1_DIR false    // for direct drive extruder v9 set to true, for geared extruder set to false
    @@ -323,7 +323,7 @@ const bool Z_MAX_ENDSTOP_INVERTING = false; // set to true to invert the logic o
     // ENDSTOP SETTINGS:
     // Sets direction of endstops when homing; 1=MAX, -1=MIN
     #define X_HOME_DIR 1
    -#define Y_HOME_DIR -1
    +#define Y_HOME_DIR 1
     #define Z_HOME_DIR -1
     
     #define min_software_endstops true // If true, axis won't move to coordinates less than HOME_POS.
    diff --git a/pins.h b/pins.h
    index 00a17c5..e3b34a7 100644
    --- a/pins.h
    +++ b/pins.h
    @@ -447,8 +447,8 @@
         #define Y_STEP_PIN         60
         #define Y_DIR_PIN          61
         #define Y_ENABLE_PIN       56
    -    #define Y_MIN_PIN          14
    -    #define Y_MAX_PIN          15 // inverti aqui
    +    #define Y_MIN_PIN          15
    +    #define Y_MAX_PIN          14 // inverti aqui
     
         #define Z_STEP_PIN         46
         #define Z_DIR_PIN          48

