# cancel

Cancels currently playing sound/music.

## Code Information

- **Name**: `cancel`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0b 04 00`
- **Assembly Address in Memory** : `0x896f9c0`

## Parameters

- `(int)sgd_id` *(8 bytes)* : [ID](./guide/reference-table.md#musicsound-list-for-playatrac-etc) of the Atrac or the Sound Effect.
- `(float)fade_time` *(8 bytes)* : Crossfade time, as seconds
- `(float)Var2` *(8 bytes)* : Please describe what this does. Seems like value between 0 and 1.

## Example

Here is one example in hex:

```25 0b 04 00 / 02 00 00 00 / f6 00 50 50 / 10 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cancel((int)1347420406, (float)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896f9c0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  FUN_088eb218(*puVar2,*puVar3,*(int *)(param_1 + 0x14) + 0x60,*puVar1,1);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

