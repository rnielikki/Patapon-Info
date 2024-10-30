# setReqActorDelayTime

Sets respawn delay time of an actor. First spawn is not affected with this.

## Code Information

- **Name**: `setReqActorDelayTime`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 12 00`
- **Assembly Address in Memory** : `0x8b5cf88`

## Parameters

- `(int* )generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(float)delay_time` *(8 bytes)* : Delay time between previous spawn and next spawn, as seconds.

## Example

Here is one example in hex:

```25 1f 12 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setReqActorDelayTime(((global)int *)giVar26, (int)0, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5cf88(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
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
    FUN_Mission__08b56cc8(*puVar3,iVar4,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

