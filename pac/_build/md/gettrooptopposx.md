# getTroopTopPosX

Gets current position of the troop *with* attack movement.

Without additional attack movement, check [getPlayerTroopBasePosition](./getplayertroopbaseposition.md).

## Code Information

- **Name**: `getTroopTopPosX`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 34 00`
- **Assembly Address in Memory** : `0x891cde4`

## Parameters

- `(float *)position` *(8 bytes)* : Variable to *store* the position of the troop.
- `(bool)side` *(8 bytes)* : Should be 0 for Player/Blue team, 1 for Enemy/Red team, but somehow results same value.

## Example

Here is one example in hex:

```25 16 34 00 / 20 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getTroopTopPosX((float *)fVar0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891cde4(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int *piVar2;
  int iVar3;
  undefined4 *puVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  *puVar1 = 0;
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
  if ((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,0), iVar3 != 0)) {
    if (*piVar2 == 0) {
      puVar4 = (undefined4 *)FUN_088e21d0(iVar3);
    }
    else {
      puVar4 = (undefined4 *)FUN_088e2208(iVar3);
    }
    if (puVar4 != (undefined4 *)0x0) {
      *puVar1 = *puVar4;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

