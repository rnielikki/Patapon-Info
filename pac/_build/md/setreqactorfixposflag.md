# setReqActorFixPosFlag

Determines if the actor is affected by gravity or not.

## Code Information

- **Name**: `setReqActorFixPosFlag`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 1a 00`
- **Assembly Address in Memory** : `0x8b5d178`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(bool)can_float` *(8 bytes)* : 0 makes the actor affected by gravity. For units on the structure, set this to 1.

## Example

Here is one example in hex:

```25 1f 1a 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setReqActorFixPosFlag(((global)int *)giVar26, (int)0, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d178(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int *piVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    FUN_Mission__08b56df0(iVar4,*puVar2,*piVar3 != 0);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

