# What is PAC?

PAC is special script owned by Pyramid Inc. The company is dead, so currently there is no learning material for this.

Patapon series is their only famous game, so you can see PAC as Patapon specific instructions (even though few other unfamous games use it).

Each PAC instruction has their Assembly function. Though, you will reach the limit with pure Assembly without PAC instruction.

## Where are the PAC?

They are in many places. For example, `missionXXXXXX.pac` in `DATA_CMN` is PAC (they are gzipped).

`loadinggroupscript` in `DATA_CMN` is another place for PAC instructions.

- `Azito.pac` : Hideout logic, loaded when hideout is loaded.
- `labo.pac` : Loaded **between hideout and mission**. Decides e.g. tip loading logic.
- `Mission_??_??.pac` : In-game logic, loaded in tip screen.
- `mission_99_00.pac` : **Story cutscenes**.
- `effect.pac` : Global effect logic, loaded once when Patapon 3 is launched.
- `monster.pac` : Global enemy behaviour logic, loaded when hideout or a mission is loaded.

For custom mission, either `Mission_??_??.pac`

## How do I know it is PAC?

PAC commands are always `25 XX XX XX`. So if you see bunch of `%` in memory, it is probably PAC instructions.

(But be careful, DxD validates PAC in end of the Mission, so editing them in Mission might cause crashing!)

## How to read the PAC?

> Related article: [Reading PAC](./reading-pac.md).


##  How to write the PAC?

I am assuming you are asking about modifying. Writing from the bottom is terrifying and extremely unreliable.

You need Hex editor. Unfortunately, there is no intuitive graphical magic editor for writing PAC.

(Modders really don't try to make it because they even can't read lol)

While modders doing their work, you can check [writing PAC](./writing-pac.md) meantime.

## Can I define a new PAC function?

Nuh uh that's very hard and I don't know even if it is possible. And why would you?