# isFlag

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isFlag`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 57 00`
- **Assembly Address in Memory** : `0x8917528`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 57 00 / 04 00 00 00 / 41 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
isFlag((int *)iVar65, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917528(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  int iVar4;
  uint uVar5;
  undefined4 uVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    *puVar2 = 0;
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 == 0) || (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 != 9)) {
      if ((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 3)) {
        uVar6 = FUN_088c5348(iVar3,0);
        uVar5 = FUN_088b907c(uVar6);
        *puVar2 = uVar5 & 0xff;
      }
    }
    else {
      uVar5 = FUN_088b907c(iVar3);
      *puVar2 = uVar5 & 0xff;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

