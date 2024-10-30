# getTroopTopPosY

Gets current Y (up or down) position of the troop *with* attack movement.

## Code Information

- **Name**: `getTroopTopPosY`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 04 01`
- **Assembly Address in Memory** : `0x8928300`

## Parameters

- `(bool)side` *(8 bytes)* : Should be 0 for Player/Blue team, 1 for Enemy/Red team.
- `(float *)position` *(8 bytes)* : Variable to *store* the position of the troop.

Note the usage order is reversed from [getTroopTopPosX](./gettrooptopposx.md).

## Example

Here is one example in hex:

```25 16 04 01 / 02 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getTroopTopPosY((int)0, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928300(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  iVar3 = FUN_088a8650(iVar3,*puVar1);
  if ((iVar3 != 0) && (iVar3 = FUN_088e21c8(iVar3), iVar3 != 0)) {
    *puVar2 = *(undefined4 *)(*(int *)(iVar3 + 200) + 0xc4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

