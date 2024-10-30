# setAdvanceEnable

Enables or disables marching. If marching is disabled, the squad cannot go forward with Patapata command.

Used in e.g. Fifty cyclopses.

## Code Information

- **Name**: `setAdvanceEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 47 00`
- **Assembly Address in Memory** : `0x891e2cc`

## Parameters

- `(bool)can_march` *(8 bytes)* : 0 prevents marching, other values allow marching.

## Example

Here is one example in hex:

```25 16 47 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setAdvanceEnable((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891e2cc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
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
  if ((iVar2 != 0) && (iVar2 = FUN_088a8650(iVar2,0), iVar2 != 0)) {
    FUN_088f9ba8(iVar2 + 0x170,*piVar1 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

