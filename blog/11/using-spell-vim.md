/*
Title: Using spell with VIM
Description: I really like VIM and I don't want to use another editor to write my Latex files. A very useful feature to help out on articles writing is use spell for ortographic check with VIM. Just use the following command...
Date: 2011/06/29
*/

# Using spell with VIM

I really like VIM and I don't want to use another editor to write my Latex files. A very useful feature to help out on articles writing is use spell for ortographic check with VIM. Just use the following command:

    :setlocal spell spelllang=pt_br

Just remember to replace "pt\_br" by your locale. Spell will then highlight your errors. Moreover, as VIM recognizes Latex syntax it don't apply spell check on Latex's key words.
