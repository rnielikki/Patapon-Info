# getActorHandle

Gets an handle of any kind of *reqActor*. Must be called **after the target is [being spawned](./spawn.md)**.

## Code Information

- **Name**: `getActorHandle`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 14 00`
- **Assembly Address in Memory** : `0x8b5d8d0`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int *)destination` *(8 bytes)* : Variable to *store* the handle.

## Example

Here is one example in hex:

```25 1f 14 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 03 00 00 00 / 08 00 00 00 / 5b 00 00 00```

Which is interpreted as:

```c
getActorHandle((int *)iVar0, (int)3, ((global)int *)giVar91)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d8d0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 uVar4;
  int iVar5;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
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
    iVar5 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar5 + 0x2c8));
    if (iVar5 == 0) {
      iVar5 = 0;
    }
  }
  if (iVar5 != 0) {
    uVar4 = FUN_Mission__08b56d28(iVar5,*puVar2);
    *puVar3 = uVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

