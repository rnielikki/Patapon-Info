# receiveVersus02MissileInfo

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `receiveVersus02MissileInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 ca 00`
- **Assembly Address in Memory** : `0x8924690`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(int)Var3` *(8 bytes)*
- `(int)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 ca 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 20 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00```

Which is interpreted as:

```c
receiveVersus02MissileInfo((int *)iVar0, (int *)iVar1, (float *)fVar1, (int *)iVar2, (int *)iVar3)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08924690(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  undefined4 *puVar3;
  int *piVar4;
  int *piVar5;
  int iVar6;
  int iVar7;
  char *pcVar8;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,3,1,4);
  piVar5 = (int *)Pac_Get_Param(param_2,4,1,4);
  iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x2d8);
  if (iVar6 != 0) {
    iVar7 = *piVar1;
    if ((iVar7 < 0) && (1 < iVar7)) {
      pcVar8 = (char *)0x0;
    }
    else {
      iVar6 = iVar7 * 0xc + *(int *)(iVar6 + 0x48);
      if (*(char *)(iVar6 + 0x25) == '\x01') {
        *(undefined *)(iVar6 + 0x25) = 0;
        pcVar8 = (char *)(iVar6 + 0x24);
      }
      else {
        pcVar8 = (char *)0x0;
      }
    }
    if (pcVar8 == (char *)0x0) {
      *piVar1 = -1;
      *piVar2 = 0;
      *puVar3 = 0;
      *piVar4 = -1;
      *piVar5 = -1;
    }
    else {
      *piVar1 = (int)*pcVar8;
      *piVar2 = (int)*(short *)(pcVar8 + 2);
      *puVar3 = *(undefined4 *)(pcVar8 + 4);
      *piVar4 = (int)pcVar8[8];
      *piVar5 = (int)pcVar8[9];
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

