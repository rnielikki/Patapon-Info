# setAdvanceSpeedRatio

Changes the march speed.

Available in debug menu.

## Code Information

- **Name**: `setAdvanceSpeedRatio`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 48 00`
- **Assembly Address in Memory** : `0x891e378`

## Parameters

- `(float)duration` *(8 bytes)* : *As seconds*, how long the march speed change will be applied.
- `(float)multiplier` *(8 bytes)* : Value to multiply to the base march speed. Set to 1 for default march speed.

## Example

Here is one example in hex:

```25 16 48 00 / 10 00 00 00 / 00 00 80 bf / 10 00 00 00 / 00 00 40 40```

Which is interpreted as:

```c
setAdvanceSpeedRatio((float)-1, (float)3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e378(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
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
    FUN_08991d3c(*puVar1,*puVar2,iVar3 + 0x290);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

