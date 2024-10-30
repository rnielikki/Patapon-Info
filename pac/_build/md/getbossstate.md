# getBossState

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getBossState`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 3b 00`
- **Assembly Address in Memory** : `0x89b46fc`

## Parameters

- `(int)unique_id` *(8 bytes)* : ID from [setReqActorUniqueId](./setreqactoruniqueid.md). Usually it is 100 (0x64) in 1v1 DLC bosses.
- `(undefined4)Var1` *(8 bytes)*

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b46fc(int param_1,undefined4 param_2)

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
    iVar3 = Get_Squad_From_ReqUniqueID(*(undefined4 *)(iVar3 + 0xf8),*puVar1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    else {
      iVar3 = FUN_0896d6e0(*(undefined4 *)(iVar3 + 0x708));
      if (iVar3 == 0) {
        iVar3 = 0;
      }
    }
  }
  if (iVar3 != 0) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x68);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

