# getGameMode

Reads mission type.

## Code Information

- **Name**: `getGameMode`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 1c 00`
- **Assembly Address in Memory** : `0x894b1a4`

## Parameters

- `(int *)mission_type` *(8 bytes)* : Variable to *store* the mission type.
  
|ID|Mission|Is Multi|
|---|---|---|
|0x1|Field/Dungeon|No|
|0x2|VS|No|
|0x3|Field/Dungeon|Yes|
|0x4|VS|Yes|
|0x5|???|Yes|

## Example

Here is one example in hex:

```25 0a 1c 00 / 08 00 00 00 / 18 00 00 00```

Which is interpreted as:

```c
getGameMode(((global)int *)giVar24)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894b1a4(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  undefined4 *puVar2;
  
  iVar1 = Get_Some_Flag(1);
  iVar1 = *(int *)(iVar1 + 0x44);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar2 = *(undefined4 *)(iVar1 + 0x530);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

