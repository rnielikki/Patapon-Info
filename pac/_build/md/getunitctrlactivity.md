# getUnitCtrlActivity

Gets current squad action of a unit. This gets the "acting" ID only.

For actual unit attack status, use [getUnitCtrlCurrentActType](./getunitctrlactivity.md).

## Code Information

- **Name**: `getUnitCtrlActivity`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 2b 00`
- **Assembly Address in Memory** : `0x8b5e6a8`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(int)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)command_id` *(8 bytes)* : [Command ID](./guide/reference-table.md#command-ids) of it, but **range of 0~2 (march, defend, attack)** or nothing (-1).
- `(int *)sqaudactivity_id` *(8 bytes)* : Variable to *store* the ID from `squadActivityParam`.

## Example

Here is one example in hex:

```25 1f 2b 00 / 04 00 00 00 / 2b 00 00 00 / 04 00 00 00 / 2a 00 00 00 / 04 00 00 00 / 31 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getUnitCtrlActivity((int *)iVar43, (int *)iVar42, (int *)iVar49, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e6a8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  undefined4 *puVar4;
  int iVar5;
  undefined4 uVar6;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *puVar4 = 0xffffffff;
  if (-1 < *piVar3) {
    iVar5 = *(int *)(param_1 + 0x10);
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    else if (*piVar1 == -1) {
      iVar5 = 0;
    }
    else {
      if (iVar5 == 0) {
        iVar5 = 0;
      }
      iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8), *piVar1);
      if (iVar5 == 0) {
        iVar5 = 0;
      }
    }
    if (iVar5 != 0) {
      uVar6 = FUN_Mission__08b57410(iVar5,*puVar2,*piVar3);
      *puVar4 = uVar6;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

