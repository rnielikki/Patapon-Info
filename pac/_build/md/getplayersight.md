# getPlayerSight

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getPlayerSight`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a8 00`
- **Assembly Address in Memory** : `0x8922bd0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*
- `(uint)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 a8 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 55 0e 00 00 / 02 00 00 00 / 59 0e 00 00```

Which is interpreted as:

```c
getPlayerSight((int)0, (int)3669, (int)3673)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922bd0(int param_1,undefined4 param_2)

{
  int iVar1;
  undefined4 *puVar2;
  uint *puVar3;
  uint *puVar4;
  int iVar5;
  byte *pbVar6;
  int iVar7;
  
  iVar1 = FUN_0883c070(param_2);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar4 = (uint *)Pac_Get_Param(param_2,2,1,4);
  pbVar6 = (byte *)(*(int *)(iVar1 + 4) + (*puVar3 >> 3));
  *pbVar6 = *pbVar6 & ((byte)(1 << (*puVar3 & 7)) ^ 0xff);
  pbVar6 = (byte *)(*(int *)(iVar1 + 4) + (*puVar4 >> 3));
  *pbVar6 = *pbVar6 & ((byte)(1 << (*puVar4 & 7)) ^ 0xff);
  iVar5 = *(int *)(param_1 + 0x10);
  if (iVar5 == 0) {
    iVar5 = 0;
  }
  else {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    iVar5 = *(int *)(iVar5 + 0xf8);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    iVar7 = 0;
    iVar5 = FUN_088a8650(iVar5,0);
    switch(*puVar2) {
    case 0:
      iVar7 = FUN_088df7ac(iVar5);
      break;
    case 1:
      iVar7 = Is_Class_Tree(iVar5,1,0);
      break;
    case 2:
      iVar7 = Is_Class_Tree(iVar5,2,0);
      break;
    case 3:
      iVar7 = Is_Class_Tree(iVar5,3,0);
    }
    if ((iVar7 != 0) && (*(char *)(*(int *)(iVar7 + 0xa14) + 0x44c) != '\0')) {
      if (*(int *)(iVar5 + 0x374) == 10) {
        pbVar6 = (byte *)(*(int *)(iVar1 + 4) + (*puVar4 >> 3));
        *pbVar6 = *pbVar6 | (byte)(1 << (*puVar4 & 7));
      }
      else {
        pbVar6 = (byte *)(*(int *)(iVar1 + 4) + (*puVar3 >> 3));
        *pbVar6 = *pbVar6 | (byte)(1 << (*puVar3 & 7));
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

