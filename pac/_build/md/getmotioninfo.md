# getMotionInfo

Gets current [action ID](./guide/reference-table.md#action-ids) of the motion.

## Code Information

- **Name**: `getMotionInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 0c 00`
- **Assembly Address in Memory** : `0x8911878`

## Parameters

- `(int *)handle` *(8 bytes)* : Handle to get the motion.
- `(int *)motion_id` *(8 bytes)* : Variable to *store* the [current ID](./guide/reference-table.md#action-ids) of the motion.
- `(uint)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 0c 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 04 00 00 00 / 02 00 00 00 / 20 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getMotionInfo((int *)iVar0, (int *)iVar1, (int *)iVar2, (float *)fVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08911878(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  uint *puVar2;
  uint *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (param_1 == 0) {
    iVar5 = 0;
  }
  else {
    iVar5 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    else {
      iVar5 = *(int *)(iVar5 + 200);
      if (iVar5 == 0) {
        iVar5 = 0;
      }
    }
  }
  if (iVar5 != 0) {
    *puVar2 = (uint)*(ushort *)(iVar5 + 0x78);
    *puVar3 = (uint)(*(float *)(iVar5 + 0x70) <= *(float *)(iVar5 + 0x68));
    *puVar4 = *(undefined4 *)(iVar5 + 0x68);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

