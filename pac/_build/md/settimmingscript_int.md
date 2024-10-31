# setTimmingScript_Int

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `setTimmingScript_Int`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 34 00`
- **Assembly Address in Memory** : `0x89143bc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(Address)address` *(4 bytes)*

## Example

Here is one example in hex:

```25 17 34 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 00 00 00 00 / 78 ef 01 00```

Which is interpreted as:

```c
setTimmingScript_Int((int *)iVar1, (int *)iVar0, 0x1ef78)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089143bc(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  undefined4 local_8;
  undefined4 local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,0,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (iVar4 != 0) {
      (**(code **)(*(int *)(iVar4 + 4) + 0x34))(iVar4);
      local_4 = *puVar3;
      local_8 = *puVar2;
      (**(code **)(*(int *)(iVar4 + 4) + 0xbc))(iVar4,&local_8);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

