# cameraMoveType

Determines if [cameraMove](./cameramove.md) uses [time](./cameramovetimeset.md) or [speed](./cameramovespeedset.md).

## Code Information

- **Name**: `cameraMoveType`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 8b 00`
- **Assembly Address in Memory** : `0x8921a78`

## Parameters

- `(bool)use_speed` *(8 bytes)* : If this is set to 0, [cameraMove](./cameramove.md) will use [time](./cameramovetimeset.md). Otherwise the `cameraMove` will use [speed](./cameramovespeedset.md).

## Example

Here is one example in hex:

```25 16 8b 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
cameraMoveType((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08921a78(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *(undefined4 *)(param_1 + 0x1c) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

