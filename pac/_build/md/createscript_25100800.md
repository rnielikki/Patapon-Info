# createScript (25100800)

> *Other functions have the same name. Check the [Disambiguation page](./createScript.md) to find them.*

Creates new PAC instruction. Unlike [cmd_call](./cmd_call.md), this doesn't block the current instruction flow.

## Code Information

- **Name**: `createScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 10 08 00`
- **Assembly Address in Memory** : `0x890a044`

## Parameters

- `(MemoryAddress)pac_address_in_memory` *(8 bytes)* : Obtained from [getPack](./getpack_25100600.md). The memory address where the whole PAC instructions start.
- `(int)address` *(8 bytes)* : Address in the PAC file *as int* to execute.
- `(int)script_id` *(8 bytes)* : Script ID to set, can be used as reference to [killScript](./killscript.md).
- `(undefined4)Var3` *(8 bytes)* : Keep 0.
- `(undefined4)Var4` *(8 bytes)* : Keep 0.
- `(int *)Var5` *(8 bytes)* : Pointer to save something. Can keep 0.

## Example

Here is one example in hex:

```25 10 08 00 / 08 00 00 00 / 5b 00 00 00 / 08 00 00 00 / 5c 00 00 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
createScript(((global)int *)giVar91, ((global)int *)giVar92, (int)1, (int)0, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0890a044(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int **ppiVar6;
  uint uVar7;
  int iVar8;
  int *piVar9;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  ppiVar6 = (int **)Pac_Get_Param(param_2,5,1,4);
  uVar7 = Pac_Get_ParamType(param_2,5);
  if (((*(int *)(param_1 + 0x10) != 0) &&
      (piVar9 = *(int **)(*(int *)(param_1 + 0x10) + 0x4dc), piVar9 != (int *)0x0)) &&
     (piVar9 = (int *)(**(code **)(*piVar9 + 0xc))(piVar9,*puVar1,*puVar2,1,0,*puVar4,*puVar5),
     piVar9 != (int *)0x0)) {
    piVar9[0x13f] = *piVar3;
    iVar8 = FUN_08909cf0(*(undefined4 *)(param_1 + 0x10));
    piVar9[0x138] = iVar8;
    (**(code **)(*piVar9 + 0x10))(piVar9,1);
    if ((uVar7 & 0xc) != 0) {
      *ppiVar6 = piVar9;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

