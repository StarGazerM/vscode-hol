# vscode-hol

this is my personal vscode setting for HOL-theorem prover.

actually I just copy and paste something from existed vscode document, and some other extensions....

**NOTICE:**
I only test this on my own environment, I use Poly/ML (TvT).

## NOW I HAVE

- `alt+h h`: create a hol terminal in vscode
- `alt+h k`: kill hol process
- `alt+h alt+r`: run selected code in hol
- `alt+h g`: set selected code as goal
- `alt+h e`: apply selected code as a HOL tactic
- `alt+h d`: drop goal
- `alt+h D`: drop all goal
- `alt+h p`: print current goal
- `alt+h P`: print all goal
- auto load the library when a line of open is run

## THINGS TO HAVE

now I have some problem in share a hol process between client and server....
Maybe some command sent to server is a good way to do this, but it is hard to modify terminal pannel, let me switch to task rather than internal terminal first =,=
in order to follow LSP structure, an idea is super silly but may work... start different HOL process, which is super easy.

- hover document(I am now on this)
- unicode replace
- function in emacs hol-mode
- make some thing like proof genral....
- good linting and auto-complete