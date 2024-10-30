# checkRangePriority_isInsideH

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `checkRangePriority_isInsideH`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 23 01`
- **Assembly Address in Memory** : `0x892a518`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 23 01 / 04 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
checkRangePriority_isInsideH((int *)iVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892a518(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  int iVar3;
  undefined4 uVar4;
  float fVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  FUN_0883c04c(param_2,0);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (((iVar2 != 0) && (iVar3 = (**(code **)(*(int *)(iVar2 + 4) + 0x34))(iVar2), iVar3 == 9)) &&
     (*(int *)(iVar2 + 200) != 0)) {
    fVar5 = *(float *)(*(int *)(iVar2 + 200) + 0xc0);
    iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x118);
    if (*(char *)(iVar2 + 0x864c) == '\0') {
      uVar4 = 0;
    }
    else if ((fVar5 <= *(float *)(iVar2 + 0x8650)) || (*(float *)(iVar2 + 0x8654) <= fVar5)) {
      uVar4 = 0;
    }
    else {
      uVar4 = 1;
    }
    FUN_0883c04c(param_2,uVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

