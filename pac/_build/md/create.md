# create

Creates an empty generator.

After this, objects such as units are placed here, through e.g. [setReqActorType](./setreqactortype.md).

More information on [How To: Create on Enemy Target](./guide/how-to-create-an-enemy-target.md).

## Code Information

- **Name**: `create`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 02 00`
- **Assembly Address in Memory** : `0x8b5bdf0`

## Parameters

- `(int *)generator_handle` *(8 bytes)* : Variable to *store* the generator handle.
- `(int)generator_identifier` *(8 bytes)* : Identifier of the generator, to [obtain the handle](./gethandle.md) later.

The `generator_size` can be 1 or 1000, depends on the action.

## Remarks

For some setups e.g. setting different level or death callback to only one object, different generator is required. In this case, the generator size can be 1.

## Example

Here is one example in hex:

```25 1f 02 00 / 08 00 00 00 / 1a 00 00 00 / 02 00 00 00 / e8 03 00 00```

Which is interpreted as:

```c
create(((global)int *)giVar26, (int)1000)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5bdf0(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = *(int *)(iVar4 + 0x2c8);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    uVar3 = FUN_Mission__08b5aa18(iVar4,*puVar2);
    *puVar1 = uVar3;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

