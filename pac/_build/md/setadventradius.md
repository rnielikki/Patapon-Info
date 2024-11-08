# setAdventRadius

Decides the distance of the units in same squad, as [generator](./create.md) level. **The spreading distance is random**.

See also: [setReqActorAdventRadius](./setreqactoradventradius.md)

## Code Information

- **Name**: `setAdventRadius`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 06 00`
- **Assembly Address in Memory** : `0x8b5c2d8`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(float)max_x_spread` *(8 bytes)* : The amount to spread in x direction.

About 2nd parameters, the cyclopses appeared around 1:36 when the value is 1800.0 and appeared around 00:42 with default value (0).

(The 1800 is big value though, around 500 can be found on usage.)

## Example

Here is one example in hex:

```25 1f 06 00 / 08 00 00 00 / 1a 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setAdventRadius(((global)int *)giVar26, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c2d8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (*piVar1 == -1) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar3 + 0x2c8));
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x20) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

