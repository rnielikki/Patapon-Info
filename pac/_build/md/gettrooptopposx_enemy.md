# getTroopTopPosX_Enemy

Gets [troop position](./gettrooptopposx_enemy.md) (including attack movement speed) from the enemies.

## Code Information

- **Name**: `getTroopTopPosX_Enemy`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ce 00`
- **Assembly Address in Memory** : `0x89257c8`

## Parameters

- `(float *)position` *(8 bytes)* : Variable to *store* the position of the troop.

## Example

Here is one example in hex:

```25 16 ce 00 / 20 00 00 00 / 0e 00 00 00```

Which is interpreted as:

```c
getTroopTopPosX_Enemy((float *)fVar14)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089257c8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 *puVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0xf8);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (((iVar2 != 0) && (iVar2 = FUN_088a8650(iVar2,1), iVar2 != 0)) &&
     (puVar3 = (undefined4 *)FUN_088e2208(iVar2), puVar3 != (undefined4 *)0x0)) {
    *puVar1 = *puVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

