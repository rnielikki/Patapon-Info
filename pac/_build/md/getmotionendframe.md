# getMotionEndFrame

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getMotionEndFrame`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 5a 00`
- **Assembly Address in Memory** : `0x89177e8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 5a 00 / 08 00 00 00 / 5b 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getMotionEndFrame(((global)int *)giVar91, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089177e8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if ((iVar3 != 0) && (*(int *)(iVar3 + 200) != 0)) {
      *puVar2 = *(undefined4 *)(*(int *)(iVar3 + 200) + 0x70);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

