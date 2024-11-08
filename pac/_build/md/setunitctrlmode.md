# setUnitCtrlMode

Decides controlling type.

## Code Information

- **Name**: `setUnitCtrlMode`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 17 00`
- **Assembly Address in Memory** : `0x8b5db80`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)mode_id` *(8 bytes)* : Expected *0~7*. Other values crash.


|`mode_id`|Spawned from far away|March (or [initial acttype](./setunitctrlstartacttype.md))|Auto Attack|Usage|
|---|---|---|---|---|
|0|Yes|Yes|Yes|Non-boss enemies|
|1, 3, 5|Yes|No|Yes||
|2|Yes|No|Yes||
|4|Yes|No|No||
|6|Yes|Yes|If in [watchArea](./setunitctrlwatcharea.md)|Spawned minibosses|
|7|No|No|Yes||

## Example

Here is one example in hex:

```25 1f 17 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 06 00 00 00```

Which is interpreted as:

```c
setUnitCtrlMode(((global)int *)giVar26, (int)0, (int)6)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5db80(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4); 
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4); //used in 0896C330
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
    FUN_Mission__08b571f0(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

