# getEventUnitDefaultPriority

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getEventUnitDefaultPriority`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 32 00`
- **Assembly Address in Memory** : `0x8b506c0`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 1c 32 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getEventUnitDefaultPriority((int *)iVar1, (int)0, (int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b506c0(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int iVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  iVar5 = *piVar2;
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  *puVar3 = 0;
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 != 0) {
    if (*piVar1 == 0) {
      iVar4 = *(int *)(iVar4 + 0x1c4) + 0x2d0;
    }
    else {
      iVar4 = *(int *)(iVar4 + 0x1c4) + 0x2b20;
    }
    iVar4 = iVar5 * 0x500 + iVar4;
    if (((iVar4 != -0x20) && (piVar1 = (int *)(iVar4 + 0x30), piVar1 != (int *)0x0)) &&
       (iVar4 = *piVar1, iVar4 != 0)) {
      *puVar3 = *(undefined4 *)(*(int *)(iVar4 + 0x870) + 0x1c);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

